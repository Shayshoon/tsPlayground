var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
console.log('ueas');
function largestValues(root) {
    if ((root === null || root === void 0 ? void 0 : root.left) === null && (root === null || root === void 0 ? void 0 : root.right) === null)
        return [root.val];
    console.log('ueas');
    return [];
}
;
