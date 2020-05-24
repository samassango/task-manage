export const findObjectWithinList = (selector, value, list) =>
  Array.isArray(list) && list.find((data) => data[selector] === value);

export const updateJobList = (
  jobList,
  jobSelector,
  sharedList,
  sharedSelector,
  sharedResultSelector
) => {
  const newJobArray = [];
  if (Array.isArray(jobList)) {
    jobList.forEach((job) => {
      const sharedObject = findObjectWithinList(
        sharedSelector,
        job[jobSelector],
        sharedList
      );
      if (!!sharedObject) {
        job[jobSelector] = sharedObject[sharedResultSelector];
      }
      newJobArray.push(job);
    });
  }
  return newJobArray;
};
