public class Keyboard implements ComputerPart {
    @Override
    public void accept(ComputerPartVisitor computerPartVisitor) {
        if (computerPartVisitor != null) {
            computerPartVisitor.visit(this);
        }
    }
}
