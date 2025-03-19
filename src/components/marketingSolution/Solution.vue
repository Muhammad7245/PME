<template>
    <div class="heading-container">
        <h1 >Solving your Digital Marketing and<br/> E-commerce Bottlenecks</h1>

    </div>
    <div class="cards-container">
    <div
      class="card"
      v-for="(card, index) in cards"
      :key="index"
    >
      <h2>{{ card.heading }}</h2>
      <h3>{{ card.subheading }}</h3>
      <p>{{ card.description }}</p>
      <ul>
        <li v-for="(item, i) in card.items" :key="i">
          <span class="icon">{{ item.icon }}</span> {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
   
</template>
<script>
export default{
    name: 'Solution',
    data() {
    return {
      cards: [
        {
          heading: 'Generate More Sales-Qualified Leads',
          subheading: 'Lead Generation',
          description: 'Boost your revenue with our customized marketing tactics designed to generate high-quality sales leads and increase overall sales performance.',
          items: [
            { icon: '⭐', text: 'High-Quality Leads' },
            { icon: '🚀', text: 'Revenue Growth' },
            { icon: '📊', text: 'Detailed Reports' }
          ]
        },
        {
          heading: 'Attract More Website Visitors',
          subheading: 'Lead Generation',
          description: 'Boost your revenue with our customized marketing tactics designed to generate high-quality sales leads and increase overall sales performance.',
          items: [
            { icon: '⭐', text: 'Lead Nurturing' },
            { icon: '🎯', text: 'Targeted Marketing' },
            { icon: '📈', text: 'Increased Conversions' }
          ]
        },
        {
          heading: 'Streamline Marketing and Sales Data',
          subheading: 'Lead Generation',
          description: 'Boost your revenue with our customized marketing tactics designed to generate high-quality sales leads and increase overall sales performance.',
          items: [
            { icon: '⭐', text: 'Market Research' },
            { icon: '🧭', text: 'Strategic Plans' },
            { icon: '💡', text: 'Creative Solutions' }
          ]
        },
        {
          heading: 'Boost Your Online Presence',
          subheading: 'Lead Generation',
          description: 'Boost your revenue with our customized marketing tactics designed to generate high-quality sales leads and increase overall sales performance.',
          items: [
            { icon: '⭐', text: 'Customer Retention' },
            { icon: '📢', text: 'Brand Awareness' },
            { icon: '📥', text: 'Inbound Leads' }
          ]
        }
      ]
    }
  }
}
</script>



<style scoped>
.heading-container {
  text-align: center;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.card {
  background: white;
  border: 1.5px solid #ddd; /* Light gray border with thicker width */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow */
  transition: transform 0.3s, border-color 0.3s;

  border-radius: 12px;
  width: 35%; /* Approximately half-width to fit 2 cards per row */
  padding: 20px;
  margin: 10px;
}

.card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card h3 {
    font-size: .875rem;
  margin-bottom: 0.5rem;
  color: #64748B;
}

.card p {
  margin-bottom: 1rem;
  color: #64748B;
}

.card ul {
  list-style: none;
  padding: 0;
}

.card li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.icon {
  margin-right: 8px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card {
    width: 90%; /* Full width on smaller screens */
  }
}
</style>