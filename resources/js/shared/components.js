// Browser-only presentation controls; fixtures are supplied by the Blade layout.
export function registerShared(Alpine) {
Alpine.data('ProjectCard', (_props = () => ({})) => ({
  _props,
  get id() {
    return this._props().id ?? undefined;
  },
  get title() {
    return this._props().title ?? undefined;
  },
  get sector() {
    return this._props().sector ?? undefined;
  },
  get location() {
    return this._props().location ?? undefined;
  },
  get investment() {
    return this._props().investment ?? undefined;
  },
  get roi() {
    return this._props().roi ?? undefined;
  },
  get landSize() {
    return this._props().landSize ?? undefined;
  },
  get status() {
    return this._props().status ?? "available";
  },
  get image() {
    return this._props().image ?? undefined;
  },
  get description() {
    return this._props().description ?? undefined;
  },
  get onSave() {
    return this._props().onSave ?? undefined;
  }
}));
Alpine.data('StatusBadge', (_props = () => ({})) => ({
  _props,
  get variant() {
    return this._props().variant ?? undefined;
  },
  get status() {
    return this._props().status ?? undefined;
  },
  get label() {
    return this._props().label ?? undefined;
  },
  get className() {
    return this._props().className ?? undefined;
  },
  get variantStyles() {
    return window.presentationFixtures.StatusBadge.variantStyles;
  },
  get statusStyles() {
    return window.presentationFixtures.StatusBadge.statusStyles;
  },
  get baseStyle() {
    return window.presentationFixtures.StatusBadge.baseStyle;
  },
  get badgeStyle() {
    return (['status', 'document', 'application'].includes(this.variant) && this.status ? this.statusStyles[this.status] : this.variantStyles[this.variant]) || '';
  }
}));
Alpine.data('EmptyState', (_props = () => ({})) => ({
  _props,
  get Icon() {
    return this._props().icon ?? undefined;
  },
  get title() {
    return this._props().title ?? undefined;
  },
  get description() {
    return this._props().description ?? undefined;
  },
  get actionLabel() {
    return this._props().actionLabel ?? undefined;
  },
  get onAction() {
    return this._props().onAction ?? undefined;
  },
  get className() {
    return this._props().className ?? undefined;
  }
}));
Alpine.data('FormStepper', (_props = () => ({})) => ({
  _props,
  get steps() {
    return this._props().steps ?? undefined;
  },
  get currentStep() {
    return this._props().currentStep ?? undefined;
  },
  get className() {
    return this._props().className ?? undefined;
  }
}));
Alpine.data('Timeline', (_props = () => ({})) => ({
  _props,
  get steps() {
    return this._props().steps ?? undefined;
  },
  get className() {
    return this._props().className ?? undefined;
  }
}));
Alpine.data('ApplicationCard', (_props = () => ({})) => ({
  _props,
  get id() {
    return this._props().id ?? undefined;
  },
  get projectName() {
    return this._props().projectName ?? undefined;
  },
  get sector() {
    return this._props().sector ?? undefined;
  },
  get submittedDate() {
    return this._props().submittedDate ?? undefined;
  },
  get status() {
    return this._props().status ?? undefined;
  },
  get assignedOfficer() {
    return this._props().assignedOfficer ?? undefined;
  },
  get nextAction() {
    return this._props().nextAction ?? undefined;
  }
}));
Alpine.data('FileUploadCard', (_props = () => ({})) => ({
  _props,
  get title() {
    return this._props().title ?? undefined;
  },
  get description() {
    return this._props().description ?? undefined;
  },
  get required() {
    return this._props().required ?? false;
  },
  get status() {
    return this._props().status ?? "not-uploaded";
  },
  get fileName() {
    return this._props().fileName ?? undefined;
  },
  get adminComment() {
    return this._props().adminComment ?? undefined;
  },
  get onUpload() {
    return this._props().onUpload ?? undefined;
  },
  get onRemove() {
    return this._props().onRemove ?? undefined;
  },
  get onDownload() {
    return this._props().onDownload ?? undefined;
  },
  get className() {
    return this._props().className ?? undefined;
  },
  get handleDragOver() {
    return e => {
      e.preventDefault();
      this.setIsDragging(true);
    };
  },
  get handleDragLeave() {
    return () => {
      this.setIsDragging(false);
    };
  },
  get handleDrop() {
    return e => {
      e.preventDefault();
      this.setIsDragging(false);
      const files = e.dataTransfer.files;
      if (files.length > 0 && this.onUpload) {
        this.onUpload(files[0]);
      }
    };
  },
  get handleFileSelect() {
    return e => {
      const files = e.target.files;
      if (files && files.length > 0 && this.onUpload) {
        this.onUpload(files[0]);
      }
    };
  },
  get statusIcon() {
    return window.presentationFixtures.FileUploadCard.statusIcon;
  },
  isDragging: undefined,
  setIsDragging(value) {
    this.isDragging = typeof value === 'function' ? value(this.isDragging) : value;
  },
  init() {
    this.isDragging = false;
  }
}));
Alpine.data('Header', (_props = () => ({})) => ({
  _props,
  get location() {
    return {
      pathname: window.location.pathname
    };
  },
  get navItems() {
    return window.presentationFixtures.Header.navItems;
  },
  get languages() {
    return window.presentationFixtures.Header.languages;
  },
  mobileMenuOpen: undefined,
  setMobileMenuOpen(value) {
    this.mobileMenuOpen = typeof value === 'function' ? value(this.mobileMenuOpen) : value;
  },
  searchOpen: undefined,
  setSearchOpen(value) {
    this.searchOpen = typeof value === 'function' ? value(this.searchOpen) : value;
  },
  currentLang: undefined,
  setCurrentLang(value) {
    this.currentLang = typeof value === 'function' ? value(this.currentLang) : value;
  },
  init() {
    this.mobileMenuOpen = false;
    this.searchOpen = false;
    this.currentLang = "EN";
  }
}));
Alpine.data('TopBar', (_props = () => ({})) => ({
  _props
}));
Alpine.data('Footer', (_props = () => ({})) => ({
  _props
}));
Alpine.data('AdminSidebar', (_props = () => ({})) => ({
  _props,
  get mobileOpen() {
    return this._props().mobileOpen ?? false;
  },
  get onMobileClose() {
    return this._props().onMobileClose ?? undefined;
  },
  get menuItems() {
    return window.presentationFixtures.AdminSidebar.menuItems;
  },
  get location() {
    return {
      pathname: window.location.pathname
    };
  },
  collapsed: undefined,
  setCollapsed(value) {
    this.collapsed = typeof value === 'function' ? value(this.collapsed) : value;
  },
  init() {
    this.collapsed = false;
  }
}));
}
