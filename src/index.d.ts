export = Gantt;

declare class Gantt {
    constructor(
        wrapper: string | HTMLElement | SVGElement,
        tasks: Gantt.Task[],
        options?: Gantt.Options,
    );

    change_view_mode(mode: Gantt.viewMode): void;
    refresh(tasks: Gantt.Task[]): void;
}

declare namespace Gantt {
    interface Task {
        id: string;
        start: string | Date;
        duration?: string;
        end?: string | Date;
        name?: string;
        progress?: number;
        dependencies?: string | string[];
        custom_class?: string;
    }

    interface EnrichedTask extends Task {
        _start: Date;
        _end: Date;
        _index: number;
        invalid?: boolean | undefined;
    }

    interface Holiday {
        name: string;
        date: string | Date;
    }

    interface Options {
        arrow_curve?: number;
        auto_move_label?: boolean;
        bar_corner_radius?: number;
        bar_height?: number;
        container_height?: number;
        column_width?: number;
        date_format?: string;
        upper_header_height?: number;
        lower_header_height?: number;
        snap_at?: string;
        infinite_padding?: boolean;
        holidays?: Record<string, 'weekend' | (Holiday | Date | string)[]>;
        ignore?: 'weekend' | (Date | string)[];
        language?: string;
        lines?: 'none' | 'both' | 'vertical' | 'horizontal';
        move_dependencies?: boolean;
        padding?: number;
        popup_on?: 'hover' | 'click';
        readonly_progress?: boolean;
        readonly_dates?: boolean;
        readonly?: boolean;
        scroll_to?: 'start' | 'end' | 'today' | Date | string;
        show_expected_progress?: boolean;
        today_button?: boolean;
        view_mode?: viewMode;
        view_mode_select?: boolean;

        popup?:
            | false
            | ((params: { task: EnrichedTask }) => string | false | void);

        on_hover?: (task: EnrichedTask) => void;
        on_click?: (task: EnrichedTask) => void;
        on_double_click?: (task: EnrichedTask) => void;
        on_date_change?: (task: EnrichedTask, start: Date, end: Date) => void;
        on_progress_change?: (task: EnrichedTask, progress: number) => void;
        on_view_change?: (mode: viewMode) => void;
    }

    type viewMode =
        | 'Hour'
        | 'Quarter Day'
        | 'Half Day'
        | 'Day'
        | 'Week'
        | 'Month'
        | 'Year';

    type viewModeKey =
        | 'HOUR'
        | 'QUARTER_DAY'
        | 'HALF_DAY'
        | 'DAY'
        | 'WEEK'
        | 'MONTH'
        | 'YEAR';

    const VIEW_MODE: Record<viewModeKey, viewMode>;
}
