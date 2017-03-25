export interface DesignProperty {
    type: "style" | "text"

    group?: string,
    label: string,
    value: string,
    binder?: string, // Same as objectKey, used for Array in designPropertiesArray

    // Input type
    input: "text" | "textbox" | "range" | "radiobuttons",

    // In range type : max and min value
    // In text type : max and min letters
    min?: number,
    max?: number,

    // In radiobuttons type : list of options
    options?: string[]
}

export interface DesignProperties {
    [key: string]: DesignProperty
}