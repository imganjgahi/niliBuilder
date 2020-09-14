export const TEMPLATES = [
    {
        id: "1",
        title: "Temp 1",
        children: [
            {
                type: "div",
                style: {
                    backgroundColor: "royalblue",
                    width: "100%",
                    color: "white"
                },
                children: [
                    {
                        type: "p",
                        style: {
                            borderBottom: "1px solid #444"
                        },
                        content: "Hello"
                    },
                    {
                        type: "h1",
                        style: {
                            borderBottom: "1px solid #444"
                        },
                        content: "Hello"
                    },
                    {
                        type: "div",
                        style: {
                            backgroundColor: "royalblue",
                            height: "450px",
                            width: "100%",
                            color: "white"
                        },
                        children: [
                            {
                                type: "h1",
                                style: {
                                    borderBottom: "1px solid #444"
                                },
                                content: "Hello"
                            },
                            {
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