var default_1 = /** @class */ (function () {
    function default_1(storage) {
        this.storage = storage;
        this.keyPrefix = '__ls_key__';
        if (!window) {
            console.error('Could not find window');
            return;
        }
        this.storage = storage || window.localStorage;
    }
    default_1.prototype.setItem = function (key, value, expiry) {
        var data = {
            key: this.keyPrefix + key,
            value: value,
        };
        if (expiry) {
            data['ts'] = this.getExpiryTimeStamp(expiry);
        }
        try {
            this.storage.setItem(key, JSON.stringify(data));
        }
        catch (e) {
            console.error('Error', e);
        }
    };
    default_1.prototype.getExpiryTimeStamp = function (expiry) {
        return expiry * 1000 + Date.now();
    };
    default_1.prototype.getItem = function (key) {
        var item = JSON.parse(this.storage.getItem(key));
        if (!item) {
            return null;
        }
        if (item && Date.now() > item.ts) {
            this.storage.removeItem(key);
            return null;
        }
        return item.value;
    };
    default_1.prototype.list = function () {
        for (var _i = 0, _a = Object.entries(this.storage); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], storageValue = _b[1];
            if (storageValue.indexOf(this.keyPrefix) > 0) {
                console.log(key, this.getItem(key));
            }
        }
    };
    default_1.prototype.removeItem = function (key) {
        return this.storage.removeItem(key);
    };
    default_1.prototype.clear = function () {
        this.storage.clear();
    };
    return default_1;
}());
export default default_1;
//# sourceMappingURL=index.js.map