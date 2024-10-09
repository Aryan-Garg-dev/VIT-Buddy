export const scrollIntoView = (e: React.MouseEvent, offSetTop: number) => {
  e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  const rect = e.currentTarget.getBoundingClientRect();
  if (rect.top < offSetTop){
    window.scrollBy({
      top: rect.top-offSetTop,
      behavior: "smooth"
    })
  }
};