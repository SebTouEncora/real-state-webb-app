<template>
    <div class="surface-card">
        <div class="card-content">
            <div class="card-field">
                <span class="card-label">ID:</span>
                <span class="card-value">{{ props.oporttunityInvestment.code }}</span>
            </div>
            <div class="card-field">
                <span class="card-label">Risk:</span>
                <span class="card-value" :class="{
                    'risk-low': props.oporttunityInvestment.risk === 'bajo',
                    'risk-medium': props.oporttunityInvestment.risk === 'medio',
                    'risk-high': props.oporttunityInvestment.risk === 'alto'
                }">
                    {{ props.oporttunityInvestment.risk }}
                </span>
            </div>
            <div class="card-field">
                <span class="card-label">Minimun to invest:</span>
                <span class="card-value">{{ props.oporttunityInvestment.minimunInvestment }}</span>
            </div>
            <div class="card-field">
                <span class="card-label">Actual amount required:</span>
                <span class="card-value">{{ props.oporttunityInvestment.amount.actualRequired }}</span>
            </div>
            <div class="card-field">
                <span class="card-label">Total investors:</span>
                <span class="card-value">{{ props.oporttunityInvestment.investors.length }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { OportunityInvestment } from '../../models/model/oportunityInvestment'

const props = defineProps<{
    oporttunityInvestment: OportunityInvestment
}>();
</script>

<style scoped>
.surface-card {
    width: 200px;
    height: 200px;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.card-label {
    font-weight: bold;
    color: #333;
}

.card-value {
    color: #555;
}

.risk-low {
    color: green;
}

.risk-medium {
    color: orange;
}

.risk-high {
    color: red;
}
</style>