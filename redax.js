// Action:
// در Redux، Action یکobject است که حاوی نوع عملیات و داده‌های مورد نیاز برای انجام آن عملیات است. Action ها به Reducer ارسال می‌شوند تا وضعیت جدید بر اساس آن‌ها تولید شود.

// مثال:
//
// 
// 
// const increment = { type: 'INCREMENT' };
// const decrement = { type: 'DECREMENT' };


// Action Creator:
// Action Creator یک function است که Action ها را ایجاد می‌کند. اینfunction همچنین می‌تواند داده‌های لازم برای ایجاد Action را دریافت کرده و آن‌ها را به عنوان پارامترها به Action منتقل کند.

// مثال:
// 
// 
// 
// const increment = (amount) => {
//   return { type: 'INCREMENT', payload: amount };
// };


// Reducer:
// Reducer یک function است که وظیفه تغییر وضعیت بر اساس Action های دریافتی دارد. این function وضعیت جدید را بر اساس وضعیت فعلی و Action مورد نظر تولید می‌کند.

// مثال:
// 
// 
// 
// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + action.payload;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };


// Store:
// Store محل ذخیره وضعیت کلی سیستم است. اینجاست که تمام داده‌ها و وضعیت‌های مختلف برنامه ذخیره می‌شود و تغییرات آن‌ها را مدیریت می‌کند.

// مثال:
// 
// 
// 
// import { createStore } from 'redux';
// const store = createStore(counterReducer);

// در این مثال، یک فروشگاه جدید Redux با استفاده از reducer counterReducer ایجاد شده است.