<script>
    import Board from "../../../lib/components/Board.svelte";

    export let data;
    let columnsData = data.data.board;
    let worker=data.data.worker;
    let cookie=data.data.cookie
    function handleBoardUpdated(newColumnsData) {
        // if you wanted to update a database or a server, this is where you would do it
        columnsData = newColumnsData;
    }
    
</script>

<Board columns={columnsData} cookie={cookie} workerList={worker} onFinalUpdate={handleBoardUpdated} />

<style>
    :global(*) {
        box-sizing: border-box;
        margin: 0;
    }
    h2,
    h5 {
        margin-bottom: 0.4em;
    }
</style>
