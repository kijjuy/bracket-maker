class SlotContainer {

    private RootNode : TreeNode | null = null; //root node of the tree

    constructor(Data : JSX.Element) {
        this.RootNode = new TreeNode(Data);
    }

    


    addNode(data : JSX.Element) : void {
        let newNode = new TreeNode(data);
    }

}

class TreeNode {

    public Data : JSX.Element;

    public LeftNode : TreeNode | null = null;
    public RightNode : TreeNode | null = null;

    constructor(Data : JSX.Element) {
        this.Data = Data;
    }

    //adding a node to the tree makes the current node's data null and adds the current data to the left node and the new data to the right node
    addNode(data : JSX.Element) : void { 
        let x = 5;
        if(this.LeftNode === null && this.RightNode === null) {
            this.LeftNode = new TreeNode(this.Data);
            this.RightNode = new TreeNode(data);
            
            
        }
    }

}