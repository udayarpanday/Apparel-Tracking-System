<script>
import Board from "../../../lib/components/Board.svelte";
  let columnsData = [
    {
      id: "c1",
      name: "TODO",
      items: [
        { id: 1, name: "item41", description: "Random", priority: "high" },
        { id: 2, name: "item42", description: "Random", priority: "high" },
        { id: 3, name: "item43", description: "Random", priority: "high" },
        { id: 4, name: "item44", description: "Random", priority: "high" },
        { id: 5, name: "item45", description: "Random", priority: "high" },
        { id: 6, name: "item46", description: "Random", priority: "high" },
        { id: 7, name: "item47", description: "Random", priority: "high" },
        { id: 8, name: "item48", description: "Random", priority: "high" },
        { id: 9, name: "item49", description: "Random", priority: "high" },
      ],
    },
    {
      id: "c2",
      name: "WORK IN PROGRESS",
      items: [
        { id: 10, name: "item50" },
        { id: 11, name: "item51" },
      ],
    },
    {
      id: "c3",
      name: "DONE",
      items: [{ id: 13, name: "item52" }],
    },
	{
      id: "c4",
      name: "UP NEXT",
      items: [{ id: 14, name: "item52" }],
    },
  ];
  function handleBoardUpdated(newColumnsData) {
    // if you wanted to update a database or a server, this is where you would do it
    columnsData = newColumnsData;
  }
</script>

<Board columns={columnsData} onFinalUpdate={handleBoardUpdated} />

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
