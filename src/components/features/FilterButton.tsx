interface FilterButtonProps {
    label: string;
    onClick: () => void;
    value: string | null;
}

const FilterButton: React.FC<FilterButtonProps> = ({
    label,
    onClick,
    value,
}) => {
    const isActive = label === value;

    return (
        <button
            onClick={onClick}
            className={`
                px-4 py-2 
                rounded-md 
                transition-colors 
                border
                filter-box-shadow
                ${
                    isActive
                        ? "bg-[var(--filter-button-active-bg)] text-[var(--filter-button-active-text)] border-[var(--filter-button-active-border)]"
                        : "bg-[var(--filter-button-bg)] text-[var(--filter-button-text)] border-[var(--filter-button-border)]"
                }
            `}
        >
            {label}
        </button>
    );
};

export default FilterButton;
