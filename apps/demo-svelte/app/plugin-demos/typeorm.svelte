<page>
    <actionBar title="typeorm" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedTypeorm } from '@demo/shared';
    import { } from '@pekevski/typeorm';

    let message: string = "Test typeorm"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
