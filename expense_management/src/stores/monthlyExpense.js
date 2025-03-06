import { defineStore } from 'pinia';

export const useMonthlyExpenseStore = defineStore('monthlyExpense', {
  state: () => ({
    monthlyExpenseItems: [
        {
          expenseDate: "1/1/2025",
          description: "Costco",
          amount: "146.6",
          category: "Grocery",
        },
        {
          expenseDate: "1/1/2025",
          description: "Shell",
          amount: "33",
          category: "Gas",
        },
      
        {
          expenseDate: "1/1/2025",
          description: "BK",
          amount: "6.6",
          category: "Food",
        },
      
        {
          expenseDate: "1/3/2025",
          description: "Safeway",
          amount: "16.2",
          category: "Grocery",
        },
      ],
      monthlyExpenseHeaders: [
        { title: "Date", value: "expenseDate" },
        { title: "Description", value: "description" },
        { title: "Amount", value: "amount" },
        { title: "Category", value: "category" },
      ],
      monthlyExpenseCatogries: ["Grocery","Food","Gas","Internet","Household","Misc"]
  }),
  actions: {
    // increment() {
    //   this.count++;
    // },
    addMonthlyExpense(date, description, amount, catogry){
      this.monthlyExpenseItems.push(
        {
          expenseDate: date,
          description: description,
          amount: amount,
          category: catogry
        }
      )
    }
  },
});