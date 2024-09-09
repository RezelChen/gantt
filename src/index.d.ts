export = Gantt;

declare class Gantt {
    constructor(wrapper: string | HTMLElement | SVGElement, tasks: Gantt.Task[], options?: Gantt.Options);

    change_view_mode(mode: Gantt.viewMode): void;
    refresh(tasks: Gantt.Task[]): void;
}

declare namespace Gantt {
    interface Task {
        id: string;
        name: string;
        start: string;
        end: string;
        progress: number;
        dependencies: string;
        custom_class?: string | undefined;
    }

    interface EnrichedTask extends Task {
        _start: Date;
        _end: Date;
        _index: number;
        invalid?: boolean | undefined;
    }

    interface Options {
        header_height?: number;
        column_width?: number;
        step?: number;
        bar_height?: number;
        bar_corner_radius?: number;
        arrow_curve?: number;
        padding?: number;
        view_mode?: viewMode;
        language?: string;
        on_click?: ((task: EnrichedTask) => void);
        on_double_click?: ((task: EnrichedTask) => void);
        on_date_change?: ((task: EnrichedTask, start: Date, end: Date) => void)
        on_progress_change?: ((task: EnrichedTask, progress: number) => void);
        on_view_change?: ((mode: viewMode) => void);
        on_hover?: ((task: EnrichedTask) => void);
        popup?: false | ((task: EnrichedTask) => string);
        view_mode_padding?: Partial<Record<viewModeKey, string>>;
        scroll_to?: string;
        view_mode_select?: boolean;
        today_button?: boolean;
        lines?: 'both' | 'vertical' | 'horizontal';
    }

    type viewMode = "Quarter Day" | "Half Day" | "Day" | "Week" | "Month" | "Year";

    type viewModeKey = "QUARTER_DAY" | "HALF_DAY" | "DAY" | "WEEK" | "MONTH" | "YEAR";

    const VIEW_MODE: Record<viewModeKey, viewMode>;
}
