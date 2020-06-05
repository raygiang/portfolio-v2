<script>
	import Icon from 'svelte-awesome';
	import { linkedin, github } from 'svelte-awesome/icons';
</script>

<footer class="footer">
    <div class="page-wrapper footer__wrapper">
        <div class="footer__copyright"><span>&copy; Raymond Giang 2020</span></div>
        <div class="footer__links">
            <a target="_blank" rel="nofollow noreferrer" href="https://ca.linkedin.com/in/raymond-giang-739328182" title="Live Link">
                <Icon class="footer__linkedin-link" data={linkedin} />
            </a>
            <a target="_blank" rel="nofollow noreferrer" href="https://github.com/raygiang" title="Live Link">
                <Icon class="footer__github-link" data={github} />
            </a>
        </div>
    </div>
</footer>

<style lang="scss">
    @import '../style/theme.scss';

    .footer {
        height: $footer-height;
        background-color: $primary-color;
        color: #FFF;
        overflow: hidden;

        &__wrapper {
            padding: 0 1rem;
            display: flex;
            height: 100%;
        }

        &__copyright, &__links {
            margin: auto 0;
        }

        &__copyright {
            flex: 75%;
        }

        &__links {
            flex: 25%;
            display: flex;
            justify-content: flex-end;

            a {
                display: inline-block;
                height: 20px;
                width: 20px;
                margin: auto 1rem auto 0;
                color: #FFF;

                :global(svg) {
                    width: 100%;
                    height: 100%;
                }

                &:last-child {
                    margin-right: 0;
                }

                &:hover {
                    color: $accent-color;
                }
            }
        }
    }
</style>