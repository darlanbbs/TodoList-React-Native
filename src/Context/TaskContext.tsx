import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

interface IProps {
  children: React.ReactElement;
}

export interface ITaskProps {
  id: string;
  title: string;
}
export interface ITask {
  task: ITaskProps[];
  addTask(task: ITaskProps): void;
  removeTask(id: string): void;
}

const tasksData = "@MyTasks:Tasks";

export const TaskContext = React.createContext<ITask>({} as ITask);

export const TaskProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const [data, setData] = useState<ITaskProps[]>([]);
  useEffect(() => {
    async function loadTasks() {
      const taskList = await AsyncStorage.getItem(tasksData);

      if (taskList) {
        setData(JSON.parse(taskList));
      }
    }

    loadTasks();
  }, []);

  const addTask = async (task: ITaskProps) => {
    try {
      const newTaskList = [...data, task];
      setData(newTaskList);
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const removeTask = async (id: string) => {
    const removeItens = data.filter((task) => task.id !== id);
    setData(removeItens);
    await AsyncStorage.setItem(tasksData, JSON.stringify(removeItens));
  };

  return (
    <TaskContext.Provider value={{ task: data, addTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
export const useTaskList = (): ITask => {
  const context = React.useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskList deve ser usado em um TasksProvider");
  }

  return context;
};
