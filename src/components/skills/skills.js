import { AdobeIllustrator, Agile, Axes, BookStack, CandlestickChart, Code, CodeBrackets, CodeBracketsSquare, Css3, Database, DatabaseBackup, DatabaseExport, DatabaseRestore, DatabaseScript, DatabaseSolid, DomoticWarning, FastArrowRight, GitPullRequest, Github, GraphUp, Html5, IconoirProvider, Internet, Journal, KanbanBoard, Leaderboard, Linux, MastercardCard, Number6Square, PcMouse, SkipNext, StyleBorder, StyleBorderSolid, Suitcase, TestTube, Windows } from "iconoir-react";
import NavigationBar from "../navigation-bar/navigationBar";
import IconSkill from "../skillIconComp/iconSkill";
import "./skills.css";

const Skills = () => {
    return (
        <>
            <NavigationBar />
            <IconoirProvider
                iconProps={{
                    strokeWidth: 1,
                    width: 100,
                    height: 100,
                }}
            >
                <div className="skills">
                    <IconSkill icon={<Html5 />} text="HTML 5" />
                    <IconSkill icon={<Css3 />} text="CSS 3" />
                    <IconSkill icon={<Code />} text="Javascript" />
                    <IconSkill icon={<DomoticWarning />} text="DOM" />
                    <IconSkill icon={<BookStack />} text="MERN stack" />
                    <IconSkill icon={<GraphUp />} text="GraphQL" />
                    <IconSkill icon={<Database />} text="MongoDB" />
                    <IconSkill icon={<DatabaseScript />} text="Node js" />
                    <IconSkill icon={<DatabaseRestore />} text="Redux Saga" />
                    <IconSkill icon={<Code />} text="Typescript" />
                    <IconSkill icon={<CandlestickChart />} text="D3 js" /> 
                    <IconSkill icon={<Number6Square />} text="ES6+" />
                    <IconSkill icon={<Axes />} text="AJAX" />
                    <IconSkill icon={<StyleBorder />} text="Bootstrap 3/4" /> 
                    <IconSkill icon={<PcMouse />} text="CMS" />
                    <IconSkill icon={<BookStack />} text="MEAN stack" />
                    <IconSkill icon={<StyleBorderSolid />} text="SASS/LESS" /> 
                    <IconSkill icon={<CandlestickChart />} text="Highcharts" /> 
                    <IconSkill icon={<Journal />} text="jQuery" /> 
                    <IconSkill icon={<Leaderboard />} text="JIRA" /> 
                    <IconSkill icon={<SkipNext />} text="Next js" />
                    <IconSkill icon={<DatabaseSolid />} text="Firebase" />
                    <IconSkill icon={<DatabaseExport />} text="Redux Thunks" />
                    <IconSkill icon={<FastArrowRight />} text="Express js" /> 
                    <IconSkill icon={<StyleBorder />} text="Tailwind css" /> 
                    <IconSkill icon={<Internet />} text="Webpack" /> 
                    <IconSkill icon={<DatabaseBackup />} text="Redis & DB2" />
                    <IconSkill icon={<Suitcase />} text="MUI" /> 
                    <IconSkill icon={<CandlestickChart />} text="FusionCharts" /> 
                    <IconSkill icon={<Agile />} text="Agile" /> 
                    <IconSkill icon={<MastercardCard />} text="SCRUM" /> 
                    <IconSkill icon={<KanbanBoard />} text="Kanban" /> 
                    <IconSkill icon={<Leaderboard />} text="Confluence" /> 
                    <IconSkill icon={<Github />} text="Github" /> 
                    <IconSkill icon={<TestTube />} text="React tesing library" /> 
                    <IconSkill icon={<CodeBrackets />} text="Visual studio code and visual studio" /> 
                    <IconSkill icon={<CodeBracketsSquare />} text="Dev tools" /> 
                    <IconSkill icon={<GitPullRequest />} text="Github version control" /> 
                    <IconSkill icon={<AdobeIllustrator />} text="Adobe Suite" /> 
                    <IconSkill icon={<TestTube />} text="JEST" /> 
                    <IconSkill icon={<Windows />} text="Windows" /> 
                    <IconSkill icon={<Linux />} text="Linux" /> 
                </div>
            </IconoirProvider>
        </>
    )
}

export default Skills;