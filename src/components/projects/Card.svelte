<script>
    export let project;
</script>

<a rel='prefetch' href='projects/{project.slug}' class="project-card">
    <img class="project-card__feature-image" src="{`${project.slug}/${project.image}`}" alt={`feature image for ${project.title}`}>
    <h2 class="project-card__title">{project.title}</h2>
</a>

<style lang="scss">
    @import '../style/theme.scss';

    $border-width: 5px;
    $duration: 0.2s;
    $active-border-color: $primary-color;

    .project-card {
        border: 1px solid #e1e1e1;
        padding: calc(#{$border-width} - 1px);
        box-shadow: 0 0 12px -8px rgba(0, 0, 0, 0.8);
        min-height: 200px;
        position: relative;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        transition: 0.5 all ease;
        background-color: #FFF;

        &__title {
            margin: auto 0 1rem 0;
            padding: 0 0.5rem;
            text-align: center;
            color: #000;
            font-size: 18px;
        }

        &__feature-image {
            width: 100%;
            height: auto;
        }


        &:before, &:after {
            display: block;
            position: absolute;
            content: '';
            width: 0%;
            height: 0%;
            visibility: hidden;
        }

        &:before {
            top: 0;
            left: 0;
            border-top: $border-width solid $active-border-color;
            border-right: $border-width solid $active-border-color;
            transition: width $duration ease $duration * 3, height $duration ease $duration * 2, visibility ease $duration * 4;
        }

        &:after {
            bottom: 0;
            right: 0;
            border-bottom: $border-width solid $active-border-color;
            border-left: $border-width solid $active-border-color;
            transition: width $duration ease $duration, height $duration ease, visibility ease $duration * 2;
        }

        &:hover, &:focus {
            box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.9);

            &:before, &:after {
                width: 100%;
                height: 100%;
                visibility: visible;
            }

            &:before {
                transition: width $duration ease, height $duration ease $duration;
            }

            &:after {
                transition: width $duration ease $duration * 2, height $duration ease $duration * 3, visibility 0.1s ease $duration * 2;
            }
        }

        @media screen and (max-width: 768px) {
            min-height: 180px;
        }
    }
</style>