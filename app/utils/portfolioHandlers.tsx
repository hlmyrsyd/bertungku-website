export const handleSectionClick = (
    sectionId: number,
    clickedSection: number | null,
    setClickedSection: (id: number | null) => void,
    setIsDark: (value: boolean) => void
    ): void => {
    if (clickedSection === sectionId) {
        setClickedSection(null);
        setIsDark(false);
    } else {
        setClickedSection(sectionId);
        setIsDark(true);
    }
};
