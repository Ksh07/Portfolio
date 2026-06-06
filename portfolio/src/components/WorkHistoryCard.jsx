const WorkHistoryCard = ({
  name,
  designation,
  logo,
  summary,
  startTime,
  end,
}) => {
  return (
    <div className="group relative bg-zinc-800 rounded-2xl p-6 ring-1 ring-inset ring-zinc-50/5 hover:bg-zinc-700/50 active:bg-zinc-700/60 transition-colors">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white p-2 ring-1 ring-zinc-700">
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {designation}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              {/* <Briefcase className="w-4 h-4" /> */}
              <span className="font-medium">{name}</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {summary}
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              {startTime} - {end === "present" ? (
                <span className="text-primary font-medium">Present</span>
              ) : (
                end
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistoryCard;
