type Point = {
    x: number;
    y: number;
};

type User = {
    id: number;
    name: string;
};

type Result = User | null;

// 使用: 指定变量类型
const point: Point = { x: 1, y: 2 };
const result: Result = { id: 1, name: 'Tom' };
