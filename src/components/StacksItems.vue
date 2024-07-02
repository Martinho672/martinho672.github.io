<template>
    <div class="items-center justify-between flex gap-4">
        <!-- Itera sobre os projetos e renderiza os links -->
        <a v-for="(project, index) in projects" :key="index" :href="project.link" target="_blank"
            class="btn btn-background-circle">
            <div class="stack-names">
                <!-- Mapeia as stacks do projeto -->
                <span v-for="(stack, idx) in project.stacks" :key="idx" class="stack-name">{{ stack }}</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'StacksItems',
    props: {
        projects: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
.stack-names {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* Quebra linha se não couber no espaço disponível */
    gap: 4px;
    /* Espaçamento entre os nomes das stacks */
}

.stack-name {
    background-color: var(--background-color);
    color: #222;
    padding: 4px 8px;
    border-radius: 8px;
    margin-right: 4px;
    margin-bottom: 4px;
    font-size: 14px;
    transition: background-color 0.3s ease-in-out;
}

.stack-name:hover {
    background-color: #ccc;
}
</style>
