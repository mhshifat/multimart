export function clsx(regularClasses: string, options?: Record<string, boolean>) {
  const classes: string[] = [`${regularClasses} transition`];

  options && Object.entries(options).forEach(([classesStr, isValid]) => {
    if (isValid) {
      classes.push(classesStr);
    }
  })
  
  return classes.join(" ");
}