<script>
    import SideBarNav from '$lib/components/sidebar_nav/Nav.svelte'
</script>

<div class="dashboard__grid">
    <aside>
        <SideBarNav>
            <li slot="logout">
                <form action="?/logout" method="POST">
                    <button class="contrast" type="submit">Logout</button>
                </form>
            </li>
        </SideBarNav>
    </aside>
    <section class="col">
        <slot></slot>
    </section>
</div>

<style>
    .dashboard__grid {
        display: flex;
        margin-top: 5%;
    }

    .col {
        width: 100%;
        height: 700px;
        margin-left: 8%;
        align-self: center;
    }
</style>