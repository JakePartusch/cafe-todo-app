import { createSelector } from 'reselect';


export function getTasks(state) {
  return state.tasks;
}

export function getTaskList(state) {
  return getTasks(state).list;
}

export function getTaskFilter(state) {
  return getTasks(state).filter;
}

export function getDeletedTask(state) {
  return getTasks(state).deleted;
}

export function getRouteFilter(state) {
  var pathname = state.routing.locationBeforeTransitions.pathname;
  var str = pathname.replace('/', '');
  return str.toUpperCase();
}

export function filterTasks(tasks, filter) {
  switch (filter) {
    case 'active':
      return tasks.filter(task => !task.completed);

    case 'completed':
      return tasks.filter(task => task.completed);

    default:
      return tasks;
  }
}

export function filterRoute(tasks, filter) {
  return tasks.filter(task => task.list === filter);
}


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getVisibleTasks = createSelector(
  getTaskList,
  getTaskFilter,
  getRouteFilter,
  (tasks, filter, routeFilter) => {
    var filteredTasks = filterTasks(tasks, filter);
    return filterRoute(filteredTasks, routeFilter);
  }
);
