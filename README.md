# Task Manager App

A simple **React** application for managing tasks. It includes a data model (`TaskModel`), a service layer (`TaskService`), and functional components such as `TasksInputForm` and `useTasks` to handle CRUD operations and state management.

## Main Features

- Create, list, and delete tasks
- Update task status (for example, `new`, `completed`, etc.)
- Centralized data handling through a custom hook (`useTasks`)
- Mock persistence layer via `TaskService` (can be connected to a real API later)
- Clear data modeling with `TaskModel`

## Project Structure


```
todo-react-app/
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   ├── LoginForm.jsx
│   │   │   └── TaskInputForm.jsx
│   │   ├── tables/
│   │   │   └── TaskTable.jsx
│   │   ├── TaskCard.jsx
│   │   └── TaskCardContainer.jsx
│   ├── hooks/
│   │   └── useTasks.js
│   ├── services/
│   │   └── SupabaseProcessor.js
│   ├── utils/
│   │   └── supabase.js
│   └── App.jsx
├── public/
│   ├── clipboard2.svg
│   └── bubble-tea.svg
└── ...
```


## Example Data Model

```js
export const TaskModel = {
  id: null,
  name: "Task",
  description: "",
  status: "new"
};
```

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/arleyserna/todo-react-app.git
   cd todo-react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

The app will typically run at `http://localhost:5173` (if using Vite) or `http://localhost:3000` (if using Create React App).

## Hooks Used

- `useState` – manages local component state
- `useEffect` – synchronizes or fetches initial data
- `useTasks` – custom hook that centralizes task logic (add, update, remove, etc.)

## Services

`TaskService.js` contains logic for creating, updating, and deleting tasks. It can be easily adapted to connect with a real backend API such as Supabase, Firebase, or any REST API.

- `SupabaseProcessor`: Handles all database operations
  - Task CRUD operations
  - Real-time updates
  - Error handling

## Future Improvements

- Integrate with more REST API
- Add user authentication
- Add unit tests with Jest and React Testing Library

## Author

**Hoover Serna**
Electronics Engineer | React Enthusiast
Contact: [arleyserna@msn.com](mailto:arleyserna@msn.com)

## License

This project is licensed under the **MIT License** — feel free to use and modify it as needed.
