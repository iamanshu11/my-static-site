<template>
  <div>
    <PageHeader
      title="Industries We Serve"
      description="Discover how our solutions are tailored to meet the unique needs of different industries."
    />

    <!-- Industries Grid -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Healthcare -->
          <IndustryCard
            title="Healthcare"
            description="Transforming healthcare delivery through innovative technology solutions."
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            :features="[
              'Electronic Health Records',
              'Telemedicine Solutions',
              'Patient Management Systems',
              'Healthcare Analytics'
            ]"
          />

          <!-- Finance -->
          <IndustryCard
            title="Finance"
            description="Empowering financial institutions with secure and efficient digital solutions."
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
            :features="[
              'Digital Banking Solutions',
              'Risk Management Systems',
              'Payment Processing',
              'Financial Analytics'
            ]"
          />

          <!-- Manufacturing -->
          <IndustryCard
            title="Manufacturing"
            description="Optimizing manufacturing processes with Industry 4.0 solutions."
            image="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            :features="[
              'Smart Factory Solutions',
              'Supply Chain Management',
              'Quality Control Systems',
              'Production Analytics'
            ]"
          />

          <!-- Retail -->
          <IndustryCard
            title="Retail"
            description="Enhancing customer experience with modern retail technology."
            image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            :features="[
              'E-commerce Platforms',
              'Inventory Management',
              'Customer Analytics',
              'Point of Sale Systems'
            ]"
          />

          <!-- Education -->
          <IndustryCard
            title="Education"
            description="Revolutionizing learning with innovative educational technology."
            image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80"
            :features="[
              'Learning Management Systems',
              'Virtual Classrooms',
              'Student Analytics',
              'Educational Apps'
            ]"
          />

          <!-- Transportation -->
          <IndustryCard
            title="Transportation"
            description="Streamlining transportation and logistics operations."
            image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            :features="[
              'Fleet Management Systems',
              'Route Optimization',
              'Logistics Tracking',
              'Transport Analytics'
            ]"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help your business thrive in the digital age.
          </p>
          <button class="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue'
import IndustryCard from '../components/IndustryCard.vue'
</script>
  