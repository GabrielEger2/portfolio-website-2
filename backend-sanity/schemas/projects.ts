export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'projectImage',
            type: 'image',
            title: 'Project Image',
        },
        {
            name: 'projectTitle',
            type: 'string',
            title: 'Project Title',
        },
        {
            name: 'projectGithubLink',
            type: 'string',
            title: 'Project Github Link',
        },
        {
            name: 'projectWebLink',
            type: 'string',
            title: 'Project Web Link',
        },
        {
            name: 'projectTechStack',
            type: 'string',
            title: 'Project Tech Stack',
        },
        {
            name: 'projectFilter',
            type: 'string',
            title: 'Project Filter',
        },
        {
            name: 'projectHighLighted',
            type: 'boolean',
            title: 'Project High Lighted',
        },
        {
            name: 'projectDescription',
            type: 'string',
            title: 'Project Description',
        }
    ]
}