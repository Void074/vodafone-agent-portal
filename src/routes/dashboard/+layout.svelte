<script>
    import SideBarNav from '$lib/components/sidebar_nav/Nav.svelte'
</script>

<div class="dashboard__grid">
    <aside>
        <SideBarNav/>
    </aside>
    <section class="col">
        <slot></slot>
    </section>
</div>

<style>
    .dashboard__grid {
        margin-top: 5%;
        display: flex;
    }

    .col {
        width: 100%;
        height: 700px;
        margin-left: 8%;
        align-self: center;
    }
</style>