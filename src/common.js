// Hiển thị ra ngoài màn hình
export function render(element, content) {
  // Nếu tìm được element thì hiển thị
  if (element) {
      DocumentFragment.getElementById(element).innerHTML = content;
  }
}