<template>
    <ContentList v-slot="{ list }" path="/entry">
        <div v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path">
                <h2>{{ article.title }}</h2>
            </NuxtLink>
            <p>{{ article.description }}</p>
        </div>
    </ContentList>
</template>