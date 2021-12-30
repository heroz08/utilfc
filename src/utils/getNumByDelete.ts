interface pagination {
  current: number,
  pageSize: number
}

function getPageNumByDel(total:number, paginationProps:pagination):number {
  const { current, pageSize } = paginationProps;
  const yu = total % pageSize;
  const maxPage = Math.ceil(total / pageSize);
  let pageNum = current;
  if ((yu === 1 && maxPage === current) || pageSize === 1) {
    pageNum = current - 1 === 0 ? 1 : current - 1;
  }
  return pageNum;
}

export default getPageNumByDel;
