import BracketSlot from "./components/BracketSlot";
class SlotContainer {

    private RootNode : TreeNode; //root node of the tree

    private GoLeft : Boolean = true;

    constructor(Data : JSX.Element) {
        this.RootNode = new TreeNode(Data);
    }

    addNode(data : JSX.Element) : void { 
        
        
        
    } 

    private addNodeR(data : JSX.Element, curNode: TreeNode) {
        if(this.RootNode.LeftNode === undefined && this.RootNode.RightNode === undefined) {
            this.RootNode.LeftNode = new TreeNode(data);
            this.RootNode.RightNode = this.RootNode;
            this.RootNode.Data = <BracketSlot name="n/a" index={0} onDataChange={() => {console.log(`${this.RootNode.Data.props.name} responded from SlotContainer`)}} />
            this.GoLeft = !this.GoLeft;
            return;
        } else if (this.GoLeft === true) {
            this.addNodeR(data, curNode.LeftNode);
        }
    }
}



class TreeNode {

    public Data : JSX.Element;
    public LeftNode : TreeNode | null = null;
    public RightNode : TreeNode | null = null;

    constructor(Data : JSX.Element) {
        this.Data = Data;
    }

}