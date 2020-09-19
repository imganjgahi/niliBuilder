export const TEMPLATES = [
    {
        id: "1",
        title: "Temp 1",
        type: "div",
        children: [
            {
                id: "1-1",
                type: "div",
                style: {
                    backgroundColor: "royalblue",
                    width: "100%",
                    color: "white"
                },
                children: [
                    {
                        id: "1-1-1",
                        type: "p",
                        style: {
                            borderBottom: "1px solid #444"
                        },
                        content: "Hello"
                    },
                    {
                        id: "1-1-2",
                        type: "h1",
                        style: {
                            borderBottom: "1px solid #444"
                        },
                        content: "Hello"
                    },
                    {
                        id: "1-1-3",
                        type: "div",
                        style: {
                            backgroundColor: "royalblue",
                            height: "450px",
                            width: "100%",
                            color: "white"
                        },
                        children: [
                            {
                                id: "1-1-3-1",
                                type: "h1",
                                style: {
                                    borderBottom: "1px solid #444"
                                },
                                content: "Hello"
                            },
                            {
                                id: "1-1-3-2",
                                type: "p",
                                style: {
                                    backgroundColor: "lightcoral",
                                    padding: "20px"
                                },
                                content: "it's a paragraph"
                            }
                        ]
                    },
                    {
                        id: "1-1-4",
                        type: "p",
                        style: {
                            backgroundColor: "lightcoral",
                            padding: "20px"
                        },
                        content: "it's a paragraph"
                    }
                ]
            }
        ]
    }
]