<template>
    <div ref="calculatorRef" class="bg-white shadow-lg rounded-xl p-6 w-full md:max-w-xl font-inter">
      <!-- You Send -->
      <p class="text-gray-600 font-medium mb-2">You Send</p>
      <div class="relative flex items-center border rounded-[20px] mt-2 bg-gray-50">
        <!-- Currency Selector Button -->
        <button
          @click="toggleDropdown('send', $event)"
          class="flex items-center justify-between bg-black gap-2 text-white px-3 py-4 rounded-[20px] w-auto flex-shrink-0"
        >
          <img :src="sendCurrency.flag" :alt="sendCurrency.code" class="w-6 h-6 mr-2" />
          <span>{{ sendCurrency.code }}</span>
          <span :class="['ml-auto text-xs transition-transform', dropdownOpen.send ? 'rotate-180' : 'rotate-0']">
            ▼
          </span>
        </button>

        <!-- Amount Input -->
        <input
          type="number"
          v-model.number="amount"
          class="ml-auto flex-grow text-right text-gray-700 font-bold bg-transparent focus:outline-none px-4 py-4 min-w-[50px]"
        />

        <!-- Currency Dropdown Content -->
        <div v-if="dropdownOpen.send" class="absolute inset-x-0 top-full bg-white shadow-lg mt-1 w-full rounded-md z-10 p-2">
          <input
            type="text"
            v-model="searchTerm.send"
            placeholder="Search currency..."
            class="w-full px-4 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500 rounded-t-md"
          />
          <div class="h-60 overflow-y-scroll">
            <button
              v-for="currency in filteredCurrencies.send"
              :key="currency.code"
              @click="selectCurrency('send', currency)"
              class="flex items-center px-4 py-2 hover:bg-gray-200 w-full"
            >
              <img :src="currency.flag" :alt="currency.code" class="w-6 h-6 mr-2" />
              <span>{{ currency.code }} - {{ currency.name }}</span>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Exchange Info -->
      <div class="my-3 mt-4 mb-4 space-y-4 text-sm text-gray-500">
        <p>Exchange rate <span class="float-right">✖ {{ exchangeRate }}</span></p>
        <hr />
        <p>Transaction fees <span class="float-right">➕ £ 0.00</span></p>
        <hr />
        <p>Converted amount <span class="float-right">➡ £ {{ convertedAmount.toFixed(2) }}</span></p>
        <hr />
      </div>
  
      <!-- Recipient Gets -->
      <p class="text-gray-600 font-medium mt-4 mb-2">Recipient Gets</p>
      <div class="relative flex items-center border rounded-[20px] mt-2 bg-gray-50">
        <!-- Currency Selector Button -->
        <button
          @click="toggleDropdown('receive', $event)"
          class="flex items-center justify-between bg-black gap-2 text-white px-3 py-4 rounded-[20px] w-auto flex-shrink-0"
        >
          <img :src="receiveCurrency.flag" :alt="receiveCurrency.code" class="w-6 h-6 mr-2" />
          <span>{{ receiveCurrency.code }}</span>
          <span :class="['ml-auto text-xs transition-transform', dropdownOpen.receive ? 'rotate-180' : 'rotate-0']">
            ▼
          </span>
        </button>
  
        <!-- Converted Amount Input -->
        <input
          type="text"
          :value="`₹ ${convertedAmount.toFixed(2)}`"
          class="ml-auto flex-grow text-right text-gray-700 font-bold bg-transparent focus:outline-none px-4 py-4 min-w-[50px]"
          readonly
        />

        <!-- Currency Dropdown Content -->
        <div v-if="dropdownOpen.receive" class="absolute inset-x-0 top-full bg-white shadow-lg mt-1 w-full rounded-md z-10 p-2">
          <input
            type="text"
            v-model="searchTerm.receive"
            placeholder="Search currency..."
            class="w-full px-4 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500 rounded-t-md"
          />
          <div class="h-60 overflow-y-scroll">
            <button
              v-for="currency in filteredCurrencies.receive"
              :key="currency.code"
              @click="selectCurrency('receive', currency)"
              class="flex items-center px-4 py-2 hover:bg-gray-200 w-full"
            >
              <img :src="currency.flag" :alt="currency.code" class="w-6 h-6 mr-2" />
              <span>{{ currency.code }} - {{ currency.name }}</span>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Send Button -->
      <button
        class="w-full bg-purple-600 text-white py-3 mt-6 rounded-lg hover:bg-purple-700"
        @click="goToSendMoney"
      >
        Send
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const currencies = [
    { code: 'AUD', name: 'Australian Dollar', flag: '/img/flags/aud.png' },
    { code: 'INR', name: 'Indian Rupee', flag: '/img/flags/inr.png' },
    { code: 'BDT', name: 'Bangladeshi Taka', flag: '/img/flags/bdt.png' },
    { code: 'FJD', name: 'Fijian Dollar', flag: '/img/flags/fjd.png' },
    { code: 'LKR', name: 'Sri Lankan Rupee', flag: '/img/flags/lkr.png' },
    { code: 'NPR', name: 'Nepalese Rupee', flag: '/img/flags/npr.png' },
    { code: 'PKR', name: 'Pakistani Rupee', flag: '/img/flags/pkr.png' }
  ]
  
  const sendCurrency = ref(currencies[0])
  const receiveCurrency = ref(currencies[1])
  const amount = ref(2500)
  const exchangeRate = ref(20)
  
  const dropdownOpen = reactive({
    send: false,
    receive: false
  })

  const searchTerm = reactive({
    send: '',
    receive: ''
  })
  
  const convertedAmount = computed(() => amount.value * exchangeRate.value)

  const filteredCurrencies = reactive({
    send: computed(() =>
      currencies.filter(currency =>
        currency.name.toLowerCase().includes(searchTerm.send.toLowerCase()) ||
        currency.code.toLowerCase().includes(searchTerm.send.toLowerCase())
      )
    ),
    receive: computed(() =>
      currencies.filter(currency =>
        currency.name.toLowerCase().includes(searchTerm.receive.toLowerCase()) ||
        currency.code.toLowerCase().includes(searchTerm.receive.toLowerCase())
      )
    )
  })
  
  const selectCurrency = (type, currency) => {
    if (type === 'send') {
      sendCurrency.value = currency
      dropdownOpen.send = false
      searchTerm.send = '' // Clear search term on selection
    } else {
      receiveCurrency.value = currency
      dropdownOpen.receive = false
      searchTerm.receive = '' // Clear search term on selection
    }
  }

  const toggleDropdown = (type, event) => {
    if (event) {
      event.stopPropagation(); // Prevent event from bubbling up to document
    }
    if (type === 'send') {
      dropdownOpen.send = !dropdownOpen.send
      dropdownOpen.receive = false // Close other dropdown
      console.log('Send dropdown state:', dropdownOpen.send); // Added log
    } else {
      dropdownOpen.receive = !dropdownOpen.receive
      dropdownOpen.send = false // Close other dropdown
      console.log('Receive dropdown state:', dropdownOpen.receive); // Added log
    }
  };
  
  const goToSendMoney = () => {
    router.push('/send-money')
  }
  
  const calculatorRef = ref(null)
  
  const handleClickOutside = (event) => {
    if (calculatorRef.value && !calculatorRef.value.contains(event.target)) {
      dropdownOpen.send = false
      dropdownOpen.receive = false
      searchTerm.send = ''; // Clear search term on close
      searchTerm.receive = ''; // Clear search term on close
    }
  }
  
  onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })
  
  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })
  </script>
  