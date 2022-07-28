
type ImgType = {
    src: string;
    srcSet: string;
}

type StyleType = 'primary' | 'secondary'

export interface ICategoryItem {
    id: string;
    label: string;
    img: ImgType;
    wide?: boolean;
    variant?: StyleType;
}