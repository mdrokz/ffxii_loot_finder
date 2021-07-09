var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var loot_tables = __spreadArray([], __read(document.getElementsByClassName('FFXII')));
var loot_list = [];
(function () {
    var e_1, _a;
    var _b;
    try {
        for (var loot_tables_1 = __values(loot_tables), loot_tables_1_1 = loot_tables_1.next(); !loot_tables_1_1.done; loot_tables_1_1 = loot_tables_1.next()) {
            var loot_table = loot_tables_1_1.value;
            var table = __spreadArray([], __read(loot_table.children[0].children)).splice(1);
            for (var i = 0; i < table.length; ++i) {
                var loot = {
                    info: {
                        name: '',
                        price: '',
                        drop: '',
                        monograph_drop: '',
                        steal: '',
                        poach: '',
                        reward: ''
                    },
                    description: '',
                    baazar: {
                        items: []
                    }
                };
                if (i % 3 == 0) {
                    var info_table = table[i].children;
                    var baazar_table = table[i + 1].children;
                    loot.description = table[i + 2].children[0].children[0].innerText;
                    for (var v = 0; v < info_table.length; ++v) {
                        var keys = Object.keys(loot.info);
                        loot.info[keys[v]] = info_table[v].innerText;
                    }
                    var items = __spreadArray([], __read((((_b = baazar_table[0].children[1]) === null || _b === void 0 ? void 0 : _b.children) == null ? [] : baazar_table[0].children[1].children))).flatMap(function (x) {
                        var split = x.innerText.split('(').splice(1).map(function (x) { return x.replace(')', ''); });
                        return [split[0], split[1]];
                    });
                    loot.baazar.items = items;
                    loot_list.push(loot);
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (loot_tables_1_1 && !loot_tables_1_1.done && (_a = loot_tables_1["return"])) _a.call(loot_tables_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return loot_list;
})();
