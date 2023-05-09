<script>
    import Board from "../../../lib/components/Board.svelte";
    let columnsData = [
        {
            id: "c1",
            name: "Order Recieved",
            items: [
                {
                    id: 1,
                    name: "100pcs hoodies order",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    priority: "High",
                    assignedTo: "Sanket",
                },
            ],
        },
        {
            id: "c2",
            name: "Work in Progress",
            items: [
                {
                    id: 10,
                    name: "Stiching sweaters",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    priority: "High",
                    assignedTo: "Sanket",
                },
                {
                    id: 12,
                    name: "Ironing shirts",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    priority: "High",
                    assignedTo: "Udaya",
                },
            ],
        },
        {
            id: "c3",
            name: "Packaging",
            items: [
                {
                    id: 13,
                    name: "Consigment to Australia",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    priority: "High",
                    assignedTo: "Sanket",
                },
            ],
        },
        {
            id: "c4",
            name: "Shipping",
            items: [
                {
                    id: 14,
                    name: "item52",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    priority: "Low",
                    assignedTo: "Bidhan",
                },
            ],
        },
        {
            id: "c6",
            name: "Delivered",
            items: [
                {
                    id: 17,
                    name: "item52",
                    description:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    priority: "Low",
                    assignedTo: "Sanket",
                },
            ],
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
