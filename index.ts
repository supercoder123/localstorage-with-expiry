type LStorage = {
  key: string;
  value: any;
  ts?: number;
};

export default class {
  private keyPrefix = '__ls_key__';

  constructor(private storage?) {
      if (!window) {
          console.error('Could not find window');
          return;
      }
      this.storage = storage || window.localStorage;
  }

  setItem(key: string, value: any, expiry?: number) {
      const data: LStorage = {
          key: this.keyPrefix + key,
          value,
      };
      if (expiry) {
          data['ts'] = this.getExpiryTimeStamp(expiry);
      }
      try {
          this.storage.setItem(key, JSON.stringify(data));
      } catch (e) {
          console.error('Error', e);
      }
  }

  private getExpiryTimeStamp(expiry: number) {
      return expiry * 1000 + Date.now();
  }

  getItem(key: string) {
      const item = JSON.parse(this.storage.getItem(key));
      if (!item) {
        return null;
      }
      if (item && Date.now() > item.ts) {
          this.storage.removeItem(key);
          return null;
      }
      return item.value;
  }

  list() {
      for (let [key, storageValue] of Object.entries<string>(this.storage)) {
          if (storageValue.indexOf(this.keyPrefix) > 0) {
              console.log(key, this.getItem(key));
          }
      }
  }

  removeItem(key: string) {
      return this.storage.removeItem(key);
  }

  clear() {
      this.storage.clear();
  }
}
