export const test = (a: number): number => {
    return a;
};

export interface Circle {
    size: number,
    radius: number,
}

export interface Rectangle {
    size: number,
    width: number,
}

export type Shape = Circle | Rectangle;

export const myFunc = (s: Shape): void => {
    const { size, ...other } = s;
    const circleProps = other as Circle;
    if (circleProps.radius !== undefined) {
        console.log(circleProps.radius);
        return;
    }
    const rectangleProps = other as Rectangle;
    console.log(rectangleProps.width);
}
