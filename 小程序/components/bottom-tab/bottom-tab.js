Component({
  properties: {
    activeIndex: {
      type: Number,
      value: 0,
    },
    tabList: {
      type: Array,
      value: [],
    },
  },
  methods: {
    handleTabClick(event) {
      const { index } = event.currentTarget.dataset;
      this.triggerEvent('tabclick', { index });
    },
  },
});
