//Q1:

function createCounter(){
    let count=0;

    return {
        increment:function(){
            count++;
            console.log("Current count",count);
        },
        decrement:function(){
            count--;
            console.log("Current count",count);
        },
        getCount:function(){
            console.log("Current count",count);
        }
    }
}

const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1

//Q2:

function createBankAccount() {
    let balance = 0;  
    let transactionHistory = []; 

    return {
        deposit(amount) {
            balance += amount;
            transactionHistory.push(`Deposited: ${amount}`);
            console.log(`Deposited: ${amount}`);
        },

        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
                transactionHistory.push(`Failed withdrawal: ${amount}`);
            } else {
                balance -= amount;
                transactionHistory.push(`Withdrawn: ${amount}`);
                console.log(`Withdrawn: ${amount}`);
            }
        },

        checkBalance() {
            console.log(`Current Balance: ${balance}`);
            return balance;
        },

        getHistory() {
            return [...transactionHistory]; 
        }
    };
}


const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined

