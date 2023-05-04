import BracketSlot from "./components/BracketSlot";
class SlotContainer {

    private CurrentNode : TreeNode; //root node of the tree

    constructor(Data : JSX.Element) {
        this.CurrentNode = new TreeNode(Data);
    }

    addNode(data : JSX.Element) : void { 
        if(this.CurrentNode.LeftNode === undefined && this.CurrentNode.RightNode === undefined) {
            this.CurrentNode.LeftNode = new TreeNode(data);
            this.CurrentNode.RightNode = new TreeNode(data);
            this.CurrentNode.Data = <BracketSlot name="n/a" index={0} onDataChange={() => {console.log(`${this.CurrentNode.Data.props.name} responded from SlotContainer`)}} />
        }
    }
}



class TreeNode {

    public Data : JSX.Element;
    public ParentNode : TreeNode | null = null;
    public LeftNode : TreeNode | null = null;
    public RightNode : TreeNode | null = null;

    constructor(Data : JSX.Element) {
        this.Data = Data;
    }

}