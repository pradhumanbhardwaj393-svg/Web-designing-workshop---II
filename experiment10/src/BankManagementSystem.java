abstract class BankAccount {

    private int accountNumber;
    private String accountHolderName;
    private double balance;

    
    public BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }


    public int getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    public void setAccountHolderName(String accountHolderName) {
        this.accountHolderName = accountHolderName;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Amount Deposited: ₹" + amount);
    }

    
    public void displayDetails() {
        System.out.println("\nAccount Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolderName);
        System.out.println("Balance        : ₹" + balance);
    }

    
    abstract void calculateInterest();
}


class SavingsAccount extends BankAccount {

    public SavingsAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {
        double interest = getBalance() * 0.05;
        System.out.println("Savings Account Interest (5%) = ₹" + interest);
    }
}


class CurrentAccount extends BankAccount {

    public CurrentAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {
        double interest = getBalance() * 0.02;
        System.out.println("Current Account Interest (2%) = ₹" + interest);
    }
}


public class BankManagementSystem {

    public static void main(String[] args) {

        
        SavingsAccount s1 = new SavingsAccount(101, "Pradhuman Bhardwaj", 10000);

        System.out.println("----- Savings Account -----");
        s1.deposit(5000);
        s1.displayDetails();
        s1.calculateInterest();

        
        CurrentAccount c1 = new CurrentAccount(102, "Rahul Sharma", 20000);

        System.out.println("\n----- Current Account -----");
        c1.deposit(3000);
        c1.displayDetails();
        c1.calculateInterest();


        System.out.println("\n========================================");
        System.out.println("        BANK MANAGEMENT SYSTEM");
        System.out.println("========================================");
        System.out.println("Name           : Pradhuman Bhardwaj");
        System.out.println("Admission No   : 2025B15410060");
        System.out.println("Roll No        : 2503215400122");
        System.out.println("Class          : CSE-DS-3");
        System.out.println("========================================");
        System.out.println("© 2026 All Rights Reserved");
    }
}