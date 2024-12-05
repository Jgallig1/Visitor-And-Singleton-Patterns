// Define the AutomobileVisitor class as implementing a Visitor interface
public class AutomobileVisitor implements Visitor {

    @Override
    public void visit(Automobile variable) {
        // Base operation for Automobile objects
        System.out.println("Visiting an automobile.");
    }

    @Override
    public void visit(Truck variable) {
        // Specialized operation for Truck objects
        System.out.println("Visiting a truck.");
    }

    @Override
    public void visit(Car variable) {
        // Specialized operation for Car objects
        System.out.println("Visiting a car.");
    }

    @Override
    public void visit(MonsterTruck variable) {
        // Specialized operation for MonsterTruck objects
        System.out.println("Visiting a monster truck.");
    }
}
