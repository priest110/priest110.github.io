import React from 'react';
import { Typography, Box, Avatar, Chip, Grid, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent, timelineOppositeContentClasses } from '@mui/lab';
import './Experience.css'

export default class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 900px)").matches };
    }

    componentDidMount() {
        const handler = e => this.setState({ matches: e.matches });
        window.matchMedia("(min-width: 900px)").addEventListener('change', handler);
    }

    render() {
        const skills = require('../data/skills.json');
        const experience = require('../data/experience.json');

        let skill_chips = [];
        for (let i = 0; i < skills.length; i++) {
            skill_chips.push(
                <Grid key={i} item lg={2} md={3} sm={4} xs={5} style={{ paddingLeft: 0 }}>
                    <Paper elevation={2} style={{ display: "inline-flex", minWidth: "160px" }}>
                        <Avatar src={skills[i][Object.keys(skills[i])]["image"]} alt={skills[i][Object.keys(skills[i])]["name"]} sx={{ height: "48", width: "48", marginLeft: "5px" }} />
                        <Typography style={{ textAlign: "center", lineHeight: "40px", paddingLeft: "10px" }}>
                            {skills[i][Object.keys(skills[i])]["name"]}
                        </Typography>
                    </Paper>
                </Grid>
            )
        }

        let experience_timeline = [];
        for (let i = 0; i < experience.length; i++) {
            experience_timeline.push(
                <TimelineItem key={i}>
                    <TimelineOppositeContent sx={{ m: 'auto 0', display: this.state.matches ? 'block' : 'none' }} align={(i % 2 === 0) ? "right" : "left"} variant="body1" color="text.secondary">
                        {experience[i].date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot variant="outlined" sx={{ border: 0, padding: 0 }}>
                            <Avatar src={experience[i].logo} sx={{ width: 38, height: 38 }} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography component="span" sx={{ display: !this.state.matches ? 'block' : 'none' }}>
                            {experience[i].date}
                        </Typography>
                        <Typography variant="h5" component="span" color="primary">
                            {experience[i].title}
                        </Typography>
                        <Typography variant="h6">
                            <b>{experience[i].subtitle}</b>
                        </Typography>
                        {experience[i].subsubtitle && (
                            <Typography color="grey">
                                <b>{experience[i].subsubtitle}</b>
                            </Typography>
                        )}
                        {experience[i].chips?.length > 0
                            ? experience[i].chips.map((chip, index) => {
                                return (
                                    <Chip key={index} color="primary" sx={{ margin: "5px" }} variant="outlined" size="small" label={chip} />
                                )
                            })
                            : (
                                <Typography color="grey">
                                    {
                                        experience[i].title === "Checkmarx"
                                            ? experience[i].content.split('\n').map((paragraph, index) => {
                                                // Split paragraph by <b> and </b> tags
                                                const parts = paragraph.split(/(<b>.*?<\/b>)/);
                                                return (
                                                    <React.Fragment key={index}>
                                                        {parts.map((part, partIndex) => {
                                                            if (part.startsWith('<b>') && part.endsWith('</b>')) {
                                                                // Extract text between <b> tags and render it bold
                                                                return <b key={partIndex}>{part.slice(3, -4)}</b>;
                                                            }
                                                            return part;
                                                        })}
                                                        <br />
                                                    </React.Fragment>
                                                );
                                            })
                                            : experience[i].content
                                    }
                                </Typography>
                            )
                        }
                    </TimelineContent>
                </TimelineItem>
            )
        }

        return (
            <div id="Experience">
                <Box justifyContent="center" alignItems="center" sx={{ display: "flex", width: "95%", maxWidth: "1300px", marginLeft: "auto", marginRight: "auto", paddingBottom: "50px", paddingTop: "100px", textAlign: "center" }}>
                    <Typography variant="h2">
                        Experience & Education
                    </Typography>
                </Box>
                <Timeline position={this.state.matches ? "alternate" : "right"} sx={{ [!this.state.matches ? `& .${timelineOppositeContentClasses.root}` : ``]: { flex: 0.2 }, padding: 0, display: "flex", maxWidth: "1300px", width: this.state.matches ? '100%' : '95%', marginLeft: "auto", marginRight: "auto" }}>
                    {experience_timeline}
                </Timeline>
                <Box justifyContent="center" alignItems="center" sx={{ display: "flex", width: "95%", maxWidth: "1300px", marginLeft: "auto", marginRight: "auto", paddingBottom: "50px", paddingTop: "50px", textAlign: "center" }}>
                    <Typography variant="h4">
                        My favorite technologies and tools
                    </Typography>
                </Box>
                <Grid className="animation-tools" container spacing={5} sx={{ display: "flex", position: "relative" }} style={{ textAlign: "center" }}>
                    {skill_chips}
                </Grid>
            </div>
        )
    }
}