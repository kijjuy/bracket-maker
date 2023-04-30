class SlotContainer {

    private RootNode : JSX.Element;

    constructor(RootNode : JSX.Element) {
        this.RootNode = RootNode;
    }

    class TreeNode {
        public data : JSX.Element;


        constructor(data : JSX.Element) {
            this.data = data;
        }

    }

    function addNode(data : JSX.Element) : void {
        let newNode = new TreeNode(data);
    }

}