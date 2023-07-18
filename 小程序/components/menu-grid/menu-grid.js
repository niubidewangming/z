Component({
  properties: {
    menuList: {
      type: Array,
      value: [],
    },
    modalTitle: {
      type: String,
      value: '',
    },
  },
  data: {
    showModal: false,
  },
  methods: {
    showMenu(event) {
      const { name } = event.currentTarget.dataset;
      this.setData({
        showModal: true,
        modalTitle: name, // 将菜单项的名字赋值给 modalTitle
      });
    },
    hideMenu() {
      this.setData({
        showModal: false,
      });
    },
  },
});
